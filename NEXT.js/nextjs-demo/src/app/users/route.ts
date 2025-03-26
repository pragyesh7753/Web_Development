export const users = [
    { id: 1, name: "Pragyesh Kumar Seth" },
    { id: 2, name: "Anand Raj Bind" }
]

export async function GET() {
    return Response.json(users)
}
export async function POST(request: Request) {
    const user = await request.json()
    const newUser = {
        id: users.length + 1,
        name: user.name,
    }
    users.push(newUser)
    return new Response(JSON.stringify(newUser), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    })
}