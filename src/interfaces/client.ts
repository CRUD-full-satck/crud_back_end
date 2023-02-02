interface ClientOrContact {
  id: string
  name: string
  email: string
  password: string
  tel: string
  created_at: string
}

export interface ClientProps extends ClientOrContact {
  contacts: ClientOrContact[]
}
export type IClient = Omit<ClientProps, "id" | "create_at">

export interface ContactProps extends ClientOrContact {
  clients: ClientOrContact[]
}
export type IContact = Omit<ContactProps, "id" | "create_at">


export interface ClientLoginProps {
  email: string
  password: string
}