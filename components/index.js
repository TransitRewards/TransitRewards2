import dynamic from "next/dynamic";

const Maps = dynamic(() => import('.'), {
    ssr: false
});

export default Maps