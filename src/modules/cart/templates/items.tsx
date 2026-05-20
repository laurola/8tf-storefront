import repeat from "@lib/util/repeat"
import { HttpTypes } from "@medusajs/types"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  cart?: HttpTypes.StoreCart
}

const ItemsTemplate = ({ cart }: ItemsTemplateProps) => {
  const items = cart?.items
  return (
    <div>
      <div className="pb-4 flex items-center border-b" style={{ borderColor: "#2a2a2a" }}>
        <h1 className="text-3xl font-bold text-white tracking-tight">Warenkorb</h1>
      </div>

      <div className="mt-2">
        <div
          className="grid grid-cols-[1fr_auto_auto_auto] gap-x-4 py-3 px-4 text-xs font-semibold uppercase tracking-widest"
          style={{ color: "#6b7280" }}
        >
          <span>Artikel</span>
          <span className="text-center w-28">Menge</span>
          <span className="hidden small:block text-right w-20">Preis</span>
          <span className="text-right w-20">Gesamt</span>
        </div>

        <div className="flex flex-col gap-y-3 mt-2">
          {items
            ? items
                .sort((a, b) => {
                  return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                })
                .map((item) => (
                  <Item
                    key={item.id}
                    item={item}
                    currencyCode={cart?.currency_code}
                  />
                ))
            : repeat(5).map((i) => <SkeletonLineItem key={i} />)}
        </div>
      </div>
    </div>
  )
}

export default ItemsTemplate
