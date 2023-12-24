import { products } from "@/data.json";
import Product, { IProduct } from "@/components/shared/Product";
import Link from "next/link";
import Button from "@/components/shared/Button";
import Tag from "@/components/shared/Tag";

// we check the page number and return start, end, pagenumber based on the passed page from url
function pageChecks(page: string) {
  let pageNumber = parseInt(page ?? "0");
  if (pageNumber < 0 || isNaN(pageNumber)) return { start: 0, end: 12, pageNumber: 0 };

  let start = pageNumber * 12;
  let end = start + 12;

  return { start, end, pageNumber };
}

// this will be a backend job (sql/no-sql ..etc)
function getProducts(
  start: number,
  end: number,
  searchParams: { [key: string]: string },
  currentPageProducts: IProduct[]
) {
  let { cats, title } = searchParams;
  const categories = cats ? cats.split(",") : [];
  if (title)
    currentPageProducts = currentPageProducts.filter((product) => product.name.includes(decodeURIComponent(title)));
  // first filter by categories
  if (categories && categories.length > 0) {
    currentPageProducts = currentPageProducts.filter((product) => {
      for (const cat of categories) {
        if (product.category.includes(decodeURIComponent(cat))) {
          return true;
        }
      }
      return false;
    });
  }

  const totalPages = Math.ceil(currentPageProducts.length / 12);
  currentPageProducts = currentPageProducts.slice(start, end);
  return { currentPageProducts, totalPages };
}

export default function Products({ searchParams }: { searchParams: { [key: string]: string } }) {
  /* We save the state in the URL, such as cats, start, and any other values, 
  so that search engines can crawl and read the page.
  */
  let { page, cats, title } = searchParams;

  const { start, end, pageNumber } = pageChecks(page);

  let { currentPageProducts, totalPages }: { currentPageProducts: IProduct[]; totalPages: number } = getProducts(
    start,
    end,
    searchParams,
    products
  );

  return (
    <div>
      <div className="flex justify-between text-xs items-center mb-4 ">
        <div className=" gap-2 items-center hidden tablet:flex">
          <span>
            Showing{" "}
            <span style={{ fontFamily: "sans-serif" }}>
              {start + 1} - {start + currentPageProducts.length} of {currentPageProducts.length}
            </span>{" "}
            Results
          </span>
          <Tag>DRESSES</Tag>
          <Tag>TOPS</Tag>
          <Tag>OUTERWEAR</Tag>
        </div>
        <div className="flex gap-2 ">
          <select className="bg-transparent">
            <option>Default Sorting</option> <option>22</option> <option>33</option> <option>44</option>
          </select>
          <div className=" w-[1px] bg-[var(--background-lightdark)] rounded-full mr-2"></div>
          <select className="bg-transparent px-2 ">
            <option>Categories</option> <option>22</option> <option>33</option> <option>44</option>
          </select>
          <div className=" w-[1px] bg-[var(--background-lightdark)] rounded-full mr-2"></div>
          <div className="flex gap-4 text-base">
            <i className="fi fi-ss-table-list text-gray-400"></i>
            <i className="fi fi-ss-apps text-gray-400"></i>
            <i className="fi fi-ss-grid-alt"></i>
          </div>
        </div>
      </div>

      <div className=" flex justify-start flex-wrap gap-6 mt-2 ">
        {currentPageProducts.length === 0 && <div>No Products Found</div>}
        {currentPageProducts.map((product, i) => {
          return (
            <div key={product.productId + i}>
              <Product product={product} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center tablet:justify-between mt-10 text-xs items-center">
        <span className="text-xs hidden tablet:block">
          Showing{" "}
          <span style={{ fontFamily: "sans-serif" }}>
            {start + 1} - {start + currentPageProducts.length} of {currentPageProducts.length}
          </span>{" "}
          Results
        </span>
        <div>
          <div className="flex gap-2 items-center">
            {pageNumber > 0 && (
              <Link href={`/shop?page=${pageNumber - 1}${cats ? `&cats=${cats}` : ""}`}>
                <Button type="fill-white" size="small" rounded="rounded-full">
                  Previous
                </Button>
              </Link>
            )}

            {Array.from(Array(totalPages).keys()).map((pageIndex) => (
              <Link key={pageIndex} href={`/shop?page=${pageIndex}${cats ? `&cats=${cats}` : ""}`}>
                <Button type="icon" active={pageIndex === pageNumber ? true : false}>
                  {pageIndex + 1}
                </Button>
              </Link>
            ))}

            {pageNumber < totalPages - 1 && (
              <Link href={`/shop?page=${pageNumber + 1}${cats ? `&cats=${cats}` : ""}`}>
                <Button type="fill-white" size="small" rounded="rounded-full">
                  Next
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
