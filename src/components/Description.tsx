import "./Description.css"

interface DescriptionProps {
    title: string;
    dates: string;
    subtitle: string;
    description: string[];
}

export default function Description(props: DescriptionProps){
    const title = props.title;
    const dates = props.dates;
    const subtitle = props.subtitle;
    const description = props.description;

    return <div className="description-container">
        <div className="title-dates">
            <h1 className="title">{title}</h1>
            <h2 className="dates">{dates}</h2>
        </div>
        <h3 className="subtitle">{subtitle}</h3>
        <ul>
            {description.map((d) => <li>{d}</li>)}
        </ul>
    </div>
}