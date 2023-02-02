import { Exclude } from 'class-transformer'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm'
import { Contact } from './contact.entitie'

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Exclude()
  @Column({ length: 220 })
  password: string

  @Column()
  tel: string

  @CreateDateColumn()
  readonly created_at: Date

  @OneToMany(() => Contact, contact => contact.client)
  contacts: Contact[]
}
