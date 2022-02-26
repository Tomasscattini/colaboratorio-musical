import { getRandomId } from 'utils/helpers';
import _ from 'lodash';

const privacy_status_options = {
    public: 'public',
    private: 'private'
};

const work_status_options = {
    composing: 'composing',
    published: 'published'
};

const version_status_options = {
    draft: 'draft',
    approved: 'approved'
};

const publicProjects = [
    {
        id: getRandomId(),
        author: {
            uid: 'user_id_of_author',
            full_name: 'Maria E. Walsh',
            photo_url: '👩🏼‍🦳'
        },
        privacy_status: privacy_status_options.public,
        work_status: work_status_options.composing,
        versions: [
            // head_id: 'f0esxh4v9s9',
            {
                parent_id: null,
                version_id: 1,
                version_status: version_status_options.approved,
                titles: {
                    open_to_vote: false,
                    chosen_title: 17,
                    list: [
                        {
                            id: 17,
                            title: 'Mi primera canción',
                            votes: 0
                        },
                        {
                            id: 95,
                            title: 'Otro título',
                            votes: 0
                        }
                    ]
                },
                audio_files: [
                    {
                        src: 'https://res.cloudinary.com/tomiscattini/video/upload/v1645736284/Otras%20fotos/La_vaca_estudiosa_-_Canciones_de_Ma__getmp3.pro_hwopqd.mp3',
                        type: 'audio/mpeg'
                    }
                ],
                theme: 'Una vaca',
                genre: 'No sé',
                assignment_rules: 'Componer una canción infantil con aire norteño',
                lyrics: 'Había una vez una vaca...',
                image: 'https://res.cloudinary.com/tomiscattini/image/upload/v1645736521/Otras%20fotos/index_qu0x9c.jpg',
                chords: ''
            },
            {
                parent_id: 'd08esaxhv9s',
                version_id: 2,
                version_status: version_status_options.approved,
                titles: {
                    chosen_title: 997,
                    list: [
                        {
                            id: 997,
                            title: 'La vaca estudiosa',
                            votes: 0
                        }
                    ]
                },
                theme: 'Una vaca vieja en la quebrada de Humahuaca',
                genre: 'Vidala'
            },
            {
                parent_id: 'd85eva3hv9s',
                version_id: 3,
                version_status: version_status_options.draft,
                lyrics: 'Había una vez una vaca en la quebrada de Humahuaca'
            }
        ],
        suggestions: [],
        collaborators: ['user_id_of_colaborator']
    }
];

class PublicProjects {
    rawData = publicProjects;

    getAllComposingProjects() {
        return this.rawData.map((project) => {
            const filteredVersions = project.versions?.filter(
                (version) => version.version_status === version_status_options.approved
            );

            const sumUpArrays = (objValue, srcValue) => {
                if (_.isArray(objValue)) {
                    return objValue.concat(srcValue);
                }
            };

            const mergedVersion = _.mergeWith({}, ...filteredVersions, sumUpArrays);

            const title = mergedVersion?.titles?.list?.filter(
                (title) => title?.id === mergedVersion?.titles?.chosen_title
            )[0]?.title;

            // const getLastVersion = (object) => {
            //     const keysToReturn = ['image', 'titles', 'lyrics', 'audio_files'];
            //     const lastVersion = {};
            //     keysToReturn.forEach((key) => {
            //         lastVersion[key] = getLastPropertyValueRecursive(object, object[object['head_id']], key);
            //     });
            //     return lastVersion;
            // };

            // const getLastPropertyValueRecursive = (parentObject, object, key) => {
            //     if (object['version_status'] === version_status_options.draft && !object['parent_id']) return '';
            //     if (object['version_status'] === version_status_options.draft && object['parent_id'])
            //         return getLastPropertyValueRecursive(parentObject, parentObject[object['parent_id']], key);
            //     if (object[key]) return object[key];
            //     if (!object['parent_id']) return '';
            //     return getLastPropertyValueRecursive(parentObject, parentObject[object['parent_id']], key);
            // };

            // const lastVersion = getLastVersion(project.versions);

            // console.log(lastVersion);

            return {
                projectId: project?.id,
                author: {
                    name: project?.author?.full_name,
                    logo: project?.author?.photo_url,
                    uid: project?.author?.uid
                },
                logo: mergedVersion?.image,
                title,
                lyrics: mergedVersion?.lyrics,
                audio: mergedVersion?.audio_files[0]
            };
        });
    }
}

const instance = new PublicProjects();

export default instance;
