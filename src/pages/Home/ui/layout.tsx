import {Title} from "../../../shared/components/Title";
import {Outlet} from "react-router";
import {Categories} from "../../../widgets/Categories";

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


                    </div>
                </div>
            </section>

            <div className="container">
            </div>

            <Outlet/>
        </main>
    )
}
