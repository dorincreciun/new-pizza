import {Category, type CategoryType} from "../../../entitites/categories";
import {Dropdown} from "../../../shared/components/Dropdown";

export const CategoryDropdown = ({invisible}: { invisible: CategoryType[] }) => {
    return (
        <Dropdown>
            <Dropdown.Button>Show More</Dropdown.Button>
            <Dropdown.Body>
                {invisible.map((props: CategoryType) => (
                    <Category
                        key={props.id}
                        {...props}
                    />
                ))}
            </Dropdown.Body>
        </Dropdown>
    )
}
