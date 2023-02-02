import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { Client } from './client.entitie';

@Entity('contacts')
export class Contact {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column()
  tel: string

  @CreateDateColumn()
  readonly created_at: Date

  @ManyToOne(() => Client, {
    eager: true,
  })@JoinColumn()
  client: Client
}
