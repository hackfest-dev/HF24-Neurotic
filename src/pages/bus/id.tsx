import Link from "next/link"
import * as React from "react"

import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"

export default function CardWithForm() {
  return (
   <div className="main flex w-[100vw]  justify-center h-[100vh] items-center">
     <Card className="w-[350px] p-5">
      <CardHeader>
        <CardTitle>Track your Order</CardTitle>
        <CardDescription>Enter the Order ID </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Order ID</Label>
              <Input id="name" type="number" placeholder="Order ID" />
            </div>
            
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Link href='/map'><Button>Track</Button></Link>
      </CardFooter>
    </Card>
   </div>
  )
}
