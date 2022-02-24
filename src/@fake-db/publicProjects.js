import { getRandomId } from 'utils/helpers';

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
            {
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
                theme: 'Una vaca vieja en la quebrada de Humahuaca',
                genre: 'Vidala',
                assignment_rules: 'Componer una canción infantil con aire norteño',
                lyrics: 'Había una vez una vaca...',
                image: 'https://res.cloudinary.com/tomiscattini/image/upload/v1645736521/Otras%20fotos/index_qu0x9c.jpg',
                chords: ''
            },
            {
                version_id: 2,
                version_status: version_status_options.approved,
                titles: {
                    open_to_vote: false,
                    chosen_title: 997,
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
                        },
                        {
                            id: 997,
                            title: 'La vaca estudiosa',
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
                theme: 'Una vaca vieja en la quebrada de Humahuaca',
                genre: 'Vidala',
                assignment_rules: 'Componer una canción infantil con aire norteño',
                lyrics: 'Había una vez una vaca...',
                image: 'https://res.cloudinary.com/tomiscattini/image/upload/v1645736521/Otras%20fotos/index_qu0x9c.jpg',
                chords: ''
            },
            {
                version_id: 3,
                version_status: version_status_options.draft,
                titles: {
                    open_to_vote: false,
                    chosen_title: 997,
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
                        },
                        {
                            id: 997,
                            title: 'La vaca estudiosa',
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
                theme: 'Una vaca vieja en la quebrada de Humahuaca',
                genre: 'Vidala',
                assignment_rules: 'Componer una canción infantil con aire norteño',
                lyrics: 'Había una vez una vaca en la quebrada de Humahuaca',
                image: 'https://res.cloudinary.com/tomiscattini/image/upload/v1645736521/Otras%20fotos/index_qu0x9c.jpg',
                chords: ''
            }
        ],
        suggestions: [],
        collaborators: ['user_id_of_colaborator']
    }
];

export default publicProjects;
