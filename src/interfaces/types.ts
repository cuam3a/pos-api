
export type User = {
    id: string
    name: string
    user: string
    password: string
    super: boolean
    active: State
    rol: Rol
  }

export enum Rol { ADMIN = 'ADMIN', SUPERVISOR = 'SUPERVISOR', VENTAS = 'VENTAS' }

export enum State { ACTIVO = 'ACTIVO', INACTIVO = 'INACTIVO', ELIMINADO = 'ELIMINADO' }

export type LoginResponse = {
    status: number
    token: string
}

export type ActionResponse = {
    status: number
    token: string
    message: string
    user: Partial<User>
}

export type ErrorResponse = {
    status: number
    error: string
    errorDetail: string
}

export type UserResponse = {
    status: number
    name: string
}

export type GetListResponse = {
    status: number
    data: any[]
}

