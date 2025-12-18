import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    title: "iPhone 9",
    price: 549,
    description: "An apple mobile which is nothing like apple",
    category: "smartphones"
  },
  {
    id: 2,
    title: "iPhone X",
    price: 899,
    description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display",
    category: "smartphones"
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    price: 1249,
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    category: "smartphones"
  }
]
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Produtos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <Card key={product.id} className="shadow-lg">
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
              <CardDescription>{product.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-2xl font-bold text-green-600 mb-4">${product.price}</p>
              <Button>Comprar</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
