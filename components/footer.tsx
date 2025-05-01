import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 py-12 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-bold">
              Lumina
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Curated premium lifestyle products for the modern individual. Quality, style, and sustainability in every
              item.
            </p>
            <div className="mt-6 flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium">Shop</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=home" className="text-muted-foreground hover:text-foreground">
                  Home & Living
                </Link>
              </li>
              <li>
                <Link href="/products?category=tech" className="text-muted-foreground hover:text-foreground">
                  Tech Accessories
                </Link>
              </li>
              <li>
                <Link href="/products?category=apparel" className="text-muted-foreground hover:text-foreground">
                  Apparel
                </Link>
              </li>
              <li>
                <Link href="/products?category=wellness" className="text-muted-foreground hover:text-foreground">
                  Wellness
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-muted-foreground hover:text-foreground">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">Customer Service</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Lumina. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {/* Visa Logo */}
              <svg className="h-8" viewBox="0 0 780 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M293.2 348.73L320.1 152.65H366.6L339.7 348.73H293.2Z" fill="#00579F" />
                <path
                  d="M576.28 156.35C567.75 153.17 554.63 149.7 538.7 149.7C486.76 149.7 450.18 177.7 450.18 218.8C450.18 249.97 476.35 267.08 496.2 277.7C516.34 288.32 523.2 295.4 523.2 305.4C523.2 320.4 504.73 327.48 487.47 327.48C464.8 327.48 452.32 324.3 433.14 316.93L426.28 313.75L419.14 354.85C429.47 360.22 450.9 364.85 473.14 365.17C528.56 365.17 564.52 337.48 564.52 294.15C564.52 269.63 548.9 250.6 518.9 234.77C500.66 224.15 489.14 217.08 489.14 205.4C489.14 194.77 501.38 184.15 526.38 184.15C545.56 184.15 559.42 188.47 570.04 192.85L574.85 195.4L582 155.72L576.28 156.35Z"
                  fill="#00579F"
                />
                <path
                  d="M666.9 152.65H630.94C618.7 152.65 609.8 156.15 604.66 169.7L522.18 348.73H578.04C578.04 348.73 588.7 321.35 591.18 315.35C598.04 315.35 652.32 315.35 661.04 315.35C662.9 323.17 668.76 348.73 668.76 348.73H718.52L666.9 152.65ZM607.47 280.57C612.28 268.32 632.18 217.7 632.18 217.7C631.85 218.32 636.66 206.35 639.42 199.07L643.52 215.85C643.52 215.85 655.76 270.57 658.04 280.57H607.47Z"
                  fill="#00579F"
                />
                <path
                  d="M242.44 152.65L189.8 283.75L184.66 260.6C175.42 230.77 147.8 198.77 117.14 182.95L165.8 348.42H222.28L303.85 152.65H242.44Z"
                  fill="#00579F"
                />
                <path
                  d="M135.04 152.65H47.8L47.14 156.15C116.76 172.6 162.28 212.6 184.66 260.6L168.28 175.4C165.8 163.27 156.9 153.27 145.38 152.65H135.04Z"
                  fill="#FAA61A"
                />
              </svg>

              {/* Mastercard Logo */}
              <svg className="h-8" viewBox="0 0 780 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M490 125H290V375H490V125Z" fill="#FF5F00" />
                <path
                  d="M318.7 250C318.7 203.8 340.9 162.5 375 135.6C347.6 114.6 313.9 103 277.2 103C192.1 103 123 169.4 123 250C123 330.6 192.1 397 277.2 397C313.9 397 347.6 385.4 375 364.4C340.9 337.5 318.7 296.2 318.7 250Z"
                  fill="#EB001B"
                />
                <path
                  d="M657 250C657 330.6 587.9 397 502.8 397C466.1 397 432.4 385.4 405 364.4C439.2 337.5 461.3 296.2 461.3 250C461.3 203.8 439.1 162.5 405 135.6C432.4 114.6 466.1 103 502.8 103C587.9 103 657 169.4 657 250Z"
                  fill="#F79E1B"
                />
              </svg>

              {/* American Express Logo */}
              <svg className="h-8" viewBox="0 0 780 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H780V500H0V0Z" fill="#016FD0" />
                <path
                  d="M390 250.4L358.2 290.2H310.8V265.8H300.8V290.2H246.4L235.6 278.6L224.8 290.2H148.8V209.8H226L236.8 221.4L247.8 209.8H307.4C326.2 209.8 341.8 214.4 350.8 224.2V209.8H403.4V224.2C410.6 213.2 425.4 209.8 443.4 209.8H487.4L498.2 221.4L509.2 209.8H570.8V224.2C581.6 213.2 599.6 209.8 618.4 209.8H671.2V290.2H616.6C598.6 290.2 582 286.8 570.8 277V290.2H505.4L494.6 278.6L483.8 290.2H421.8C404.6 290.2 392.6 286.8 384.6 280.4L390 250.4ZM193.4 271.6H172.6L208.2 228.4L172.6 228.4V228.4H155.6V271.6H172.6L172.6 271.6L193.4 271.6ZM246.4 271.6H229.4L229.4 228.4H246.4L282 271.6L282 228.4H299V271.6H282L246.4 271.6ZM350.8 271.6H317.6V228.4H350.8C367.8 228.4 380.6 235.6 380.6 250C380.6 264.4 367.8 271.6 350.8 271.6ZM443.4 271.6H410.2V228.4H443.4C460.4 228.4 473.2 235.6 473.2 250C473.2 264.4 460.4 271.6 443.4 271.6ZM539.6 271.6H505.4V228.4H539.6C556.6 228.4 569.4 235.6 569.4 250C569.4 264.4 556.6 271.6 539.6 271.6ZM631.2 271.6H598V228.4H631.2C648.2 228.4 661 235.6 661 250C661 264.4 648.2 271.6 631.2 271.6Z"
                  fill="white"
                />
              </svg>

              {/* PayPal Logo */}
              <svg className="h-8" viewBox="0 0 780 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M535.3 235.6C535.3 290.9 490.8 335.4 435.5 335.4C380.2 335.4 335.7 290.9 335.7 235.6C335.7 180.3 380.2 135.8 435.5 135.8C490.8 135.8 535.3 180.3 535.3 235.6Z"
                  fill="#003087"
                />
                <path
                  d="M506.9 232.6C506.9 232.6 507.4 229.5 507.4 227.9C507.4 222.7 504.8 218 497.5 218H483.8C483.3 218 482.8 218.5 482.8 219L476.5 260.1C476.5 260.6 476.5 261.1 477 261.1H486.9C487.9 261.1 488.4 260.6 488.4 259.6L490 249.7C490 248.7 490.5 248.2 491.5 248.2H495.5C503.8 248.2 509.5 243.5 510.5 235.2C511 234.7 511 233.6 506.9 232.6ZM491.5 239.3H487.9C487.4 239.3 486.9 239.8 486.9 240.3L488.4 248.2C488.4 248.7 488.9 249.2 489.4 249.2H492C496.5 249.2 499.6 247.2 499.6 242.5C499.6 240.3 497 239.3 491.5 239.3Z"
                  fill="white"
                />
                <path
                  d="M399.3 232.6C399.3 232.6 399.8 229.5 399.8 227.9C399.8 222.7 397.2 218 389.9 218H376.2C375.7 218 375.2 218.5 375.2 219L368.9 260.1C368.9 260.6 368.9 261.1 369.4 261.1H379.8C380.3 261.1 380.8 260.6 380.8 260.1L382.3 250.2C382.3 249.2 382.8 248.7 383.8 248.7H387.8C396.1 248.7 401.8 244 402.8 235.7C402.8 234.7 402.3 233.6 399.3 232.6ZM383.8 239.3H380.3C379.8 239.3 379.3 239.8 379.3 240.3L380.8 248.2C380.8 248.7 381.3 249.2 381.8 249.2H384.3C388.9 249.2 391.9 247.2 391.9 242.5C391.9 240.3 389.4 239.3 383.8 239.3Z"
                  fill="#009CDE"
                />
                <path
                  d="M425.6 239.3H422C421.5 239.3 421 239.8 421 240.3L422.5 248.2C422.5 248.7 423 249.2 423.5 249.2H427.1C431.6 249.2 434.7 247.2 434.7 242.5C434.7 240.3 432.1 239.3 425.6 239.3Z"
                  fill="#009CDE"
                />
                <path
                  d="M458.9 232.1C458.9 231.6 458.4 231.1 457.9 231.1H447.5C447 231.1 446.5 231.6 446 232.1L439.7 260.1C439.7 260.6 439.7 261.1 440.2 261.1H445.5C446 261.1 446.5 260.6 447 260.1L448.5 250.2C448.5 249.7 449 249.2 449.5 249.2H456.8C457.3 249.2 457.8 248.7 457.8 248.2L459.3 232.6C459.4 232.6 459.4 232.1 458.9 232.1ZM533.3 231.1H522.9C522.4 231.1 521.9 231.6 521.4 232.1L515.1 260.1C515.1 260.6 515.1 261.1 515.6 261.1H520.9C521.4 261.1 521.9 260.6 522.4 260.1L523.9 250.2C523.9 249.7 524.4 249.2 524.9 249.2H532.2C532.7 249.2 533.2 248.7 533.2 248.2L534.7 232.6C534.8 232.1 534.3 231.1 533.3 231.1Z"
                  fill="white"
                />
                <path
                  d="M441.2 232.6C441.2 232.6 441.7 229.5 441.7 227.9C441.7 222.7 439.1 218 431.8 218H418.1C417.6 218 417.1 218.5 417.1 219L410.8 260.1C410.8 260.6 410.8 261.1 411.3 261.1H421.7C422.2 261.1 422.7 260.6 422.7 260.1L424.2 250.2C424.2 249.2 424.7 248.7 425.7 248.7H429.7C438 248.7 443.7 244 444.7 235.7C444.7 234.7 444.2 233.6 441.2 232.6Z"
                  fill="#003087"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
