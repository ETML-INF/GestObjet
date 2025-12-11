import vine from '@vinejs/vine'

export const SalleValidator = vine.compile(
  vine.object({
    numero: vine.string().unique({ table: 'Salle', column: 'numero' }),
    batiment: vine.string(),
  })
)
