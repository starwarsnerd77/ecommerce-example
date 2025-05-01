"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [openCategories, setOpenCategories] = useState(true)
  const [openPrice, setOpenPrice] = useState(true)
  const [openColors, setOpenColors] = useState(true)

  const categories = [
    { id: "home", label: "Home & Living" },
    { id: "tech", label: "Tech Accessories" },
    { id: "apparel", label: "Apparel" },
    { id: "wellness", label: "Wellness" },
    { id: "kitchen", label: "Kitchen" },
  ]

  const colors = [
    { id: "black", label: "Black" },
    { id: "white", label: "White" },
    { id: "gray", label: "Gray" },
    { id: "blue", label: "Blue" },
    { id: "green", label: "Green" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Filters</h3>
        <Button variant="outline" size="sm" className="mt-2 w-full justify-start">
          Clear All
        </Button>
      </div>

      <Collapsible open={openCategories} onOpenChange={setOpenCategories}>
        <CollapsibleTrigger asChild>
          <div className="flex cursor-pointer items-center justify-between">
            <h4 className="text-sm font-medium">Categories</h4>
            <ChevronDown className={`h-4 w-4 transition-transform ${openCategories ? "rotate-180" : ""}`} />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4 space-y-4">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={`category-${category.id}`} />
              <Label htmlFor={`category-${category.id}`} className="text-sm">
                {category.label}
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={openPrice} onOpenChange={setOpenPrice}>
        <CollapsibleTrigger asChild>
          <div className="flex cursor-pointer items-center justify-between">
            <h4 className="text-sm font-medium">Price Range</h4>
            <ChevronDown className={`h-4 w-4 transition-transform ${openPrice ? "rotate-180" : ""}`} />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4 space-y-4">
          <Slider defaultValue={[0, 500]} max={1000} step={10} value={priceRange} onValueChange={setPriceRange} />
          <div className="flex items-center justify-between">
            <span className="text-sm">${priceRange[0]}</span>
            <span className="text-sm">${priceRange[1]}</span>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={openColors} onOpenChange={setOpenColors}>
        <CollapsibleTrigger asChild>
          <div className="flex cursor-pointer items-center justify-between">
            <h4 className="text-sm font-medium">Colors</h4>
            <ChevronDown className={`h-4 w-4 transition-transform ${openColors ? "rotate-180" : ""}`} />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4 space-y-4">
          {colors.map((color) => (
            <div key={color.id} className="flex items-center space-x-2">
              <Checkbox id={`color-${color.id}`} />
              <Label htmlFor={`color-${color.id}`} className="text-sm">
                {color.label}
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
