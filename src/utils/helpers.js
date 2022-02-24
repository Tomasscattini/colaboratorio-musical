function parsePath(uri = '') {
    return `${process.env.PUBLIC_URL}${uri}`;
}

const parseSeconds = (time) => {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor((time / 60) % 60);
    const hours = Math.floor((time / (60 * 60)) % 24);

    return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
};

const getRandomId = () => {
    return Math.random().toString(36).slice(2);
};

const parsePublicProjectCardInfo = (item) => {
    const highestVersionNumber = Math.max.apply(
        Math,
        item.versions?.filter((version) => version?.version_status === 'approved').map((version) => version.version_id)
    );
    const lastVersion = item.versions?.find((version) => version.version_id === highestVersionNumber);

    const title = lastVersion?.titles?.list?.filter((title) => title?.id === lastVersion?.titles?.chosen_title)[0]
        ?.title;

    return {
        author: {
            name: item.author?.full_name,
            logo: item.author?.photo_url,
            uid: item.author?.uid
        },
        logo: lastVersion?.image,
        title,
        projectId: item.id,
        lyrics: lastVersion?.lyrics,
        audio: lastVersion?.audio_files[0]
    };
};

const mantainancePath = '/mantainance';

export { getRandomId, mantainancePath, parsePath, parsePublicProjectCardInfo, parseSeconds };
