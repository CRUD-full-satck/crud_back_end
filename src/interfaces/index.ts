interface ClientOrContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: Date;
}

export interface ClientProps extends ClientOrContact {
  password: string;
  contacts: ClientOrContact[];
}

export type IClient = Omit<ClientProps, "id" | "create_at">;

export interface ContactProps extends ClientOrContact {
  clientId: string;
}

export type IContact = Omit<ContactProps, "id" | "create_at">;

export interface ClientLoginProps {
  email: string;
  password: string;
}

export interface EmailAndPasswordProps {
  email: string;
  phone: string;
}
