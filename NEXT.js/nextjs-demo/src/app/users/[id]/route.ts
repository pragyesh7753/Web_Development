import { users } from "../route"

export async function GET(_request: Request, { params }: { params: { id: string } }

) {
    const { id } = await params
    const user = users.find(user => user.id === parseInt(id))
    return Response.json(user)
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
    const { id } = params
    const index = users.findIndex(user => user.id === parseInt(id))

    if (index === -1) {
        return new Response("User not found", { status: 404 })
    }

    const deletedUser = users.splice(index, 1)[0]
    return Response.json(deletedUser)
}