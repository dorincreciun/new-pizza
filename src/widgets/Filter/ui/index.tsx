import {useEffect, useState} from "react";

/* Shared */
import {Title} from "../../../shared/components/Title";
import {Checkbox} from "../../../shared/components/Checkbox";
import {Radio} from "../../../shared/components/Radio";
import {Button} from "../../../shared/components/Button";
import type {ApiDoughType, ApiFlag, ApiIngredient} from "../../../shared/types/global";

export const Filter = () => {
    const [flags, setFlags] = useState<ApiFlag[] | null>(null)
    const [ingredients, setIngredients] = useState<ApiIngredient[] | null>(null)
    const [doughTypes, setDoughTypes] = useState<ApiDoughType[] | null>(null)

    useEffect(() => {
        ( async () => {
            const res = await fetch("http://localhost:3000/api/browse/filters")
            const data = await res.json()

            setFlags(data.data.flags)
            setIngredients(data.data.ingredients)
            setDoughTypes(data.data.doughTypes)
        })()
    }, []);

    return (
        <>
            {/* Flags */}
            {flags && (
                <div className={"flex flex-col gap-3.5"}>
                    {flags.map(({id, key, label}: ApiFlag) => (
                        /* TODO: Din ApiFlags scoatem label ca tip undefined, sau este sau nu */
                        <Checkbox
                            key={id ?? key}
                            label={label ?? ""}
                        />
                    ))}
                </div>
            )}

            {/* Price */}
            <div
                className={
                    "border-border-subtle my-6 flex flex-col gap-3.5 border-t border-b py-6"
                }
            >
                {/* Title section */}
                <Title as={"h3"} size={"xs"}>
                    Цена от и до:
                </Title>
                <div className={"flex items-center justify-between gap-3.5"}>
                    input
                </div>
            </div>

            {/* Ingredients */}
            {ingredients && (
                <div className={"flex flex-col gap-3.5"}>
                    {/* Title section */}
                    <Title as={"h3"} size={"xs"}>
                        Ингредиенты:
                    </Title>

                    {ingredients.map(({id, key, label}: ApiIngredient) => (
                        /* TODO: Din ApiIngredient scoatem label ca tip undefined, sau este sau nu */
                        <Checkbox
                            key={id ?? key}
                            label={label ?? ""}
                        />
                    ))}
                </div>
            )}

            {/* Dough types */}
            {doughTypes && (
                <div
                    className={
                        "border-border-subtle my-6 flex flex-col gap-3.5 border-t border-b py-6"
                    }
                >
                    {/* Title section */}
                    <Title as={"h3"} size={"xs"}>
                        Тип теста:
                    </Title>

                    {doughTypes.map(({id, key, label}: ApiDoughType) => (
                        /* TODO: Din ApiDoughType scoatem label ca tip undefined, sau este sau nu */
                        <Radio
                            key={id ?? key}
                            name={label}
                            label={label ?? ""}
                        />
                    ))}
                </div>
            )}

            <Button size={"large"} className={"w-full"}>
                Применить
            </Button>
        </>
    );
};
