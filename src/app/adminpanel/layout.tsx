import Submenu from "@/components/Submenu";


type Props = {
    children: React.ReactNode;
};

const AdminPanelLayout = async (props: Props) => {

    return (
        <div className="grid grid-cols-12">
            <Submenu/>
            <div className="col-span-4 p-3">
                <h4>Admin panel</h4>
                {props.children}
            </div>
        </div>
    );
};

export default AdminPanelLayout;