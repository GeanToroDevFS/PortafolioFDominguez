import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import type { SupportingDocument } from '../data/profile'

type Props = {
  documents?: SupportingDocument[]
}

const DocumentLinks = ({ documents }: Props) => {
  const [open, setOpen] = useState<SupportingDocument | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(null)
    }
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open])

  if (!documents?.length) return null

  return (
    <>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
        {documents.map((file) => (
          <button
            key={file.src}
            type="button"
            className="text-sm text-gold underline underline-offset-4"
            onClick={() => setOpen(file)}
          >
            {file.label}
          </button>
        ))}
      </div>
      {open
        ? createPortal(
            <div
              className="fixed inset-0 z-[80] flex items-center justify-center bg-[#071018]/80 p-4"
              role="presentation"
              onClick={() => setOpen(null)}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-label={open.alt}
                className="max-h-[92vh] w-full max-w-3xl overflow-auto bg-ivory p-3"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="mb-3 flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-ink">{open.label}</p>
                  <button type="button" className="text-sm text-ink underline underline-offset-4" onClick={() => setOpen(null)}>
                    Cerrar
                  </button>
                </div>
                <img src={open.src} alt={open.alt} className="w-full" />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}

export default DocumentLinks
