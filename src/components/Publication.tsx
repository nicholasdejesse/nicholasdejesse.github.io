import "./Publication.css"

interface PublicationProp{
    title: string,
    link: string,
    image_path: string,
}

export default function Publication(prop: PublicationProp){
    const title = prop.title;
    const link = prop.link;
    const image_path = prop.image_path;
    return <a href={link} target="_blank" className="pub-container">
        <img src={image_path} className="pub-image"/>
        <h1 className="pub-title">{title}</h1>
    </a>
}