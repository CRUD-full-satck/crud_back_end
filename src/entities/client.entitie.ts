import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm'
import { Exclude } from 'class-transformer'
import { Contact } from './contact.entitie'

@Entity("clients")
export class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column({ length: 220 })
  @Exclude()
  password: string

  @Column()
  tel: string

  @CreateDateColumn()
  created_at: Date

  @OneToMany(() => Contact, contact => contact.client)
  contacts: Contact[]
}
