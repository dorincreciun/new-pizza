import {Title} from "../../../shared/components/Title";
import {Categories} from "../../../features/categories";
import {Outlet} from "react-router";
import {Dropdown} from "../../../shared/components/Dropdown";
import {cn} from "../../../shared/lib/cn.ts";
import {ArrowUpDown} from "lucide-react";

export const CatalogLayout = () => {
    return (
        <main>
            <section className={"mb-9 mt-10"}>
                <div className={"container"}>
                    {/* Title */}
                    <Title as={"h1"} size={"xl"}>Все пиццы</Title>

                    <div className={"mt-5 flex items-center justify-between gap-4"}>

                        {/* Categories */}
                        <Categories/>

                        <Dropdown className={"max-w-max"}>
                            <Dropdown.Toggle className={cn(
                                "px-6 py-4 flex items-center gap-2 bg-surface rounded-2xl select-none max-w-max",
                                "focus-within:ring-2 focus-within:ring-gray-400/10",
                            )}>
                                <ArrowUpDown/>
                                Сортировка: <span className={"text-primary"}>рейтингу</span>
                            </Dropdown.Toggle>
                            <Dropdown.Body className={cn([
                                "flex flex-col items-center gap-2 top-15.5 w-full",
                                "bg-surface rounded-2xl px-2 py-1.5 select-none",
                                "focus-within:ring-2 focus-within:ring-gray-400/10",
                            ])}>
                                wdwd
                            </Dropdown.Body>
                        </Dropdown>

                    </div>
                </div>
            </section>

            <Outlet/>
        </main>
    )
}
