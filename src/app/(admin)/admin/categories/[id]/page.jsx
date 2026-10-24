import { useParams } from "next/navigation";

function page() {
    const { id } = useParams();

    return (
        <div>
            id - {id}
        </div>
    )
};
export default page;