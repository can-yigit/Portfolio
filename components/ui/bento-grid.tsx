import { ComponentPropsWithoutRef, ReactNode } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background?: ReactNode
  Icon?: React.ElementType
  description: string
  href?: string
  cta?: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 md:grid-cols-3 gap-4 md:gap-5",
        className
      )}
      style={{ gridAutoRows: "minmax(220px, auto)" }}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-2xl h-full",
      "bg-white border border-neutral-200/60",
      "[box-shadow:0_1px_1px_rgba(0,0,0,.02),0_4px_8px_rgba(0,0,0,.04),0_16px_32px_rgba(0,0,0,.04)]",
      "hover:border-neutral-300/80 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300",
      "dark:bg-neutral-900 dark:border-neutral-800 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props}
  >
    {/* Background - absolut positioniert */}
    <div className="absolute inset-0 z-0">{background}</div>
    
    {/* Content - unten positioniert */}
    {(Icon || name || description) && (
      <div className="relative z-10 mt-auto p-5 pt-3 bg-gradient-to-t from-white via-white/98 to-transparent dark:from-neutral-900 dark:via-neutral-900/98">
        <div className="pointer-events-none flex transform-gpu flex-col gap-1.5 transition-all duration-300 lg:group-hover:-translate-y-10">
          {Icon && (
            <Icon className="h-7 w-7 origin-left transform-gpu text-neutral-500 transition-all duration-300 ease-in-out group-hover:scale-75 dark:text-neutral-400" />
          )}
          {name && (
            <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
              {name}
            </h3>
          )}
          {description && (
            <p className="max-w-lg text-sm text-neutral-500 dark:text-neutral-400">{description}</p>
          )}
        </div>

        {cta && href && (
          <div
            className={cn(
              "pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden"
            )}
          >
            <Button
              variant="link"
              asChild
              size="sm"
              className="pointer-events-auto p-0"
            >
              <a href={href}>
                {cta}
                <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
              </a>
            </Button>
          </div>
        )}
      </div>
    )}

    {cta && href && (
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 z-20 hidden w-full translate-y-10 transform-gpu flex-row items-center p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex"
        )}
      >
        <Button
          variant="link"
          asChild
          size="sm"
          className="pointer-events-auto p-0"
        >
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </a>
        </Button>
      </div>
    )}

    <div className="pointer-events-none absolute inset-0 z-10 transform-gpu transition-all duration-300 group-hover:bg-black/[.02] group-hover:dark:bg-neutral-800/10" />
  </div>
)

export { BentoCard, BentoGrid }
