
const SectionTitle = ({title, subTitle}) => {
    return (
        <div data-aos="zoom-in-up" className="my-24 space-y-4">
        <h3 className="text-3xl font-semibold mx-auto text-center max-w-xl">
        {title}
        </h3>
        <p className="mx-auto text-center max-w-2xl text-black/60">{subTitle}</p>
        </div>
    );
};

export default SectionTitle;