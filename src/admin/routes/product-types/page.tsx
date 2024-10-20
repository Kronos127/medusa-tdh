import React, { useState } from "react"
import { defineRouteConfig } from "@medusajs/admin-sdk"
import { ChatBubbleLeftRight } from "@medusajs/icons"
import { useAdminProductTypes, useAdminCreateProductType } from "../../hooks/use-product-types"
import { Button, Input, Container } from "@medusajs/ui"

const ProductTypes = () => {
  const { product_types, isLoading } = useAdminProductTypes()
  const createProductType = useAdminCreateProductType()
  const [name, setName] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await createProductType({ name })
    setName("")
  }

  return (
    <Container className="divide-y p-0">
      <h1>Product Types</h1>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter product type"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit">Create Product Type</Button>
      </form>

      <ul>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          product_types.map((type) => <li key={type.id}>{type.name}</li>)
        )}
      </ul>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "Custom Route",
  icon: ChatBubbleLeftRight,
});

export default ProductTypes
