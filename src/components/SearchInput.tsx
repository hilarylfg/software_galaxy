import {Search} from "lucide-react";

export default function SearchInput() {
    return(
        <>
            <div className="search">
                <Search width={20} />
                <input type="text" placeholder="Поиск по сайту"/>
            </div>
        </>
    )
}
