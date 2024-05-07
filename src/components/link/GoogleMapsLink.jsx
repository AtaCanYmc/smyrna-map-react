export const GoogleMapsLink = ({ enlem, boylam, text='Google Haritalarda Aç' }) => {
    return (
        <>
            <a href={`https://www.google.com/maps?q=${enlem},${boylam}`}>
                {text}
            </a>
        </>
    )
}