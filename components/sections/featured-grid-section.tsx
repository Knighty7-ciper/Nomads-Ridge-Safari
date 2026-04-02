'use client'

import { FeaturedCard } from './featured-card'

interface GridItem {
  title: string
  subtitle?: string
  description?: string
  image: string
  href?: string
}

interface FeaturedGridSectionProps {
  title?: string
  subtitle?: string
  items: GridItem[]
  layout?: 'three-col' | 'two-col' | 'full-width' | 'featured-main'
  spacing?: 'compact' | 'normal' | 'spacious'
}

export function FeaturedGridSection({
  title,
  subtitle,
  items,
  layout = 'three-col',
  spacing = 'normal',
}: FeaturedGridSectionProps) {
  const spacingClasses = {
    compact: 'gap-2 sm:gap-3',
    normal: 'gap-4 sm:gap-6',
    spacious: 'gap-6 sm:gap-8',
  }

  const gridClasses = {
    'three-col': 'grid-cols-1 md:grid-cols-3',
    'two-col': 'grid-cols-1 md:grid-cols-2',
    'full-width': 'grid-cols-1',
    'featured-main': 'grid-cols-1 md:grid-cols-3 md:gap-6',
  }

  return (
    <section className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16 text-center">
            {subtitle && (
              <p className="text-xs sm:text-sm font-serif text-amber-700 tracking-widest uppercase font-semibold mb-3">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                {title}
              </h2>
            )}
          </div>
        )}

        {/* Grid Container */}
        {layout === 'featured-main' && items.length >= 2 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Featured large item - takes full height on left */}
            <div className="md:col-span-1 md:row-span-2">
              <FeaturedCard
                title={items[0].title}
                subtitle={items[0].subtitle}
                description={items[0].description}
                image={items[0].image}
                href={items[0].href}
                size="large"
              />
            </div>

            {/* Two items stacked on right */}
            <div className="md:col-span-2 space-y-6">
              {items.slice(1, 3).map((item, index) => (
                <FeaturedCard
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  image={item.image}
                  href={item.href}
                  size="medium"
                />
              ))}
            </div>
          </div>
        ) : (
          <div className={`grid ${gridClasses[layout]} ${spacingClasses[spacing]}`}>
            {items.map((item, index) => (
              <FeaturedCard
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                image={item.image}
                href={item.href}
                size={layout === 'full-width' ? 'large' : 'medium'}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
