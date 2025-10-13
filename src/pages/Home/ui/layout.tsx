import {Title} from "../../../shared/components/Title";
import {Categories} from "../../../features/categories";
import {Outlet} from "react-router";

export const CatalogLayout = () => {
    return (
        <main>
            <section className={"mb-9 mt-10"}>
                <div className={"container"}>
                    {/* Title */}
                    <Title as={"h1"} size={"xl"}>Все пиццы</Title>

                    <div className={"mt-5"}>

                        {/* Categories */}
                        <Categories />

                    </div>
                </div>
            </section>

            <Outlet />
        </main>
    )
}