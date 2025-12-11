import vine from '@vinejs/vine'

export const SalleValidator = vine.compile(
  vine.object({
    numero: vine.string(),
    batiment: vine.string(),
  })
)
