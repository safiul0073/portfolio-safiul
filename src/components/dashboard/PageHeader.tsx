import React from 'react'

export const PageHeader = ({title, children}: {title: string, children?: React.ReactNode}) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      {children}
    </div>
  )
}
