#!/usr/bin/env node

/**
 * Admin Setup Script
 * Initializes the admin password in the MySQL database
 * Usage: node scripts/setup-admin.js
 */

const mysql = require('mysql2/promise')
const bcrypt = require('bcryptjs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve)
  })
}

async function setupAdmin() {
  console.log('\n🔧 Nomads Ridge Safaris - Admin Setup\n')

  try {
    // Get database credentials
    const host = await askQuestion('MySQL Host (default: localhost): ') || 'localhost'
    const user = await askQuestion('MySQL User: ')
    const password = await askQuestion('MySQL Password: ')
    const database = await askQuestion('Database Name (default: nomads_ridge): ') || 'nomads_ridge'

    const adminPassword = await askQuestion('Admin Password (default: Kesh09it7): ') || 'Kesh09it7'
    const adminEmail = await askQuestion('Admin Email (default: bknglabs.dev@gmail.com): ') || 'bknglabs.dev@gmail.com'

    console.log('\n⏳ Setting up admin user...\n')

    // Create connection
    const connection = await mysql.createConnection({
      host,
      user,
      password,
      database,
    })

    // Hash password
    const hashedPassword = await bcrypt.hash(adminPassword, 10)

    // Insert or update admin user
    const sql = `
      INSERT INTO admin_users (email, password_hash)
      VALUES (?, ?)
      ON DUPLICATE KEY UPDATE
      password_hash = VALUES(password_hash),
      updated_at = CURRENT_TIMESTAMP
    `

    await connection.execute(sql, [adminEmail, hashedPassword])

    console.log('✅ Admin user successfully configured!')
    console.log(`   Email: ${adminEmail}`)
    console.log(`   Password: ${adminPassword}`)
    console.log('\n📝 Next steps:')
    console.log('   1. Update your .env.local with MySQL credentials')
    console.log('   2. Run: npm run dev')
    console.log('   3. Triple-click the copyright footer to access admin')
    console.log('\n')

    await connection.end()
    rl.close()
  } catch (error) {
    console.error('❌ Error:', error.message)
    rl.close()
    process.exit(1)
  }
}

setupAdmin()
