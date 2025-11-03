import {Title} from "../../../shared/components/Title";
import {Outlet} from "react-router";

const CatalogLayout = () => {
    return (
        <main>
            <section className={"mb-9 mt-10"}>
                <div className={"container"}>
                    {/* Title */}
                    <Title as={"h1"} size={"xl"}>Все пиццы</Title>

                    <div className={"mt-5 flex items-center justify-between gap-4"}>

                        Categorii
                    </div>
                </div>
            </section>

            <div className="container">
                <Outlet/>
            </div>
        </main>
    )
}

export default CatalogLayout;