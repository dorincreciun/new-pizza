import type {FC} from "react";
import type {ProductCardProps} from "../model/types/product-card.ts";
import {Button} from "../../../shared/components/Button";
import {Grid2x2Plus, Plus, Settings2} from "lucide-react";

export const ProductCard: FC<ProductCardProps> = ({name, description, imageUrl, isCustomizable, basePrice}) => {
    return (
        <div className={"flex flex-col relative"}>
            {/* Product image */}
            <div className={"p-5 bg-primary/5 flex items-center justify-center rounded-2xl overflow-hidden"}>
                <img
                    src={imageUrl || "/no-preview.jpg"}
                    alt={name}
                    width={220}
                    height={220}
                />
            </div>

            {/* Product description */}
            <div className={"flex flex-1 flex-col"}>
                <div className={"flex-1 py-3.5"}>
                    {/* Product title */}
                    <h2 className={"mb-2 font-bold text-xl"}>
                        {name}
                    </h2>
                    {/* Product description */}
                    <p className={"text-muted"}>
                        {description}
                    </p>
                </div>
                {/* Product price */}
                <div className={"flex items-center justify-between"}>
                    <div>{basePrice}</div>

                    {isCustomizable ? (
                        <Button
                            kind={"solid"}
                            color={"secondary"}
                        >
                            <Grid2x2Plus/>
                            Собрать
                        </Button>
                    ) : (
                        <Button
                            kind={"solid"}
                            color={"secondary"}
                        >
                            <Plus />
                            Добавить
                        </Button>
                    )}
                </div>
            </div>

            <div className={"absolute top-5 right-5"}>
                <Settings2 className={"text-primary"} />
            </div>
        </div>
    )
}