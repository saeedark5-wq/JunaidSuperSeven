import { NextResponse } from "next/server"
import { defaultProperties } from "@/data/properties"
import { Property } from "@/lib/utils"

let properties = [...defaultProperties]

export async function GET() {
  return NextResponse.json(properties)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const newProperty: Property = {
      id: String(Date.now()),
      title: body.title || "",
      price: body.price || "",
      location: body.location || "",
      area: body.area || "",
      bedrooms: Number(body.bedrooms) || 0,
      bathrooms: Number(body.bathrooms) || 0,
      type: body.type || "Rent",
      community: body.community || "Other",
      images: body.images || [],
      description: body.description || "",
      featured: Boolean(body.featured),
      createdAt: new Date().toISOString().split("T")[0],
    }
    properties.unshift(newProperty)
    return NextResponse.json(newProperty, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const index = properties.findIndex((p) => p.id === body.id)
    if (index === -1) {
      return NextResponse.json({ error: "Property not found" }, { status: 404 })
    }
    properties[index] = { ...properties[index], ...body }
    return NextResponse.json(properties[index])
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json()
    const index = properties.findIndex((p) => p.id === id)
    if (index === -1) {
      return NextResponse.json({ error: "Property not found" }, { status: 404 })
    }
    properties.splice(index, 1)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }
}
