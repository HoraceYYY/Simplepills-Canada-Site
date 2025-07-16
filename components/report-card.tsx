import Image from "next/image"

interface ReportCardProps {
  number: number
  title: string
  subtitle?: string
  iconSrc: string
}

export function ReportCard({ number, title, subtitle, iconSrc }: ReportCardProps) {
  return (
    <div className="bg-white p-6 rounded-md shadow-sm flex flex-col">
      <div className="text-center mb-2">
        <span className="inline-block bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center font-semibold">
          {number}
        </span>
      </div>

      {/* Fixed height container for title and subtitle */}
      <div className="text-center h-20 flex flex-col justify-center">
        <h3 className="font-semibold">{title}</h3>
        {subtitle && <p className="text-sm">{subtitle}</p>}
      </div>

      <div className="flex justify-center mt-auto">
        <div className="w-24 h-24 bg-lime-100 rounded-md flex items-center justify-center">
          <Image src={iconSrc || "/placeholder.svg"} alt={title} width={64} height={64} />
        </div>
      </div>
    </div>
  )
}
