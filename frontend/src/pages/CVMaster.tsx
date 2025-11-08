import React, { useState, useEffect } from 'react'; 

import DashboardLayout from '../components/layout/DashboardLayout';
import { SidebarAction, SidebarCV } from '../components/navigation/Sidebar';
import { DEFAULT_SIDEBAR_ITEMS } from '../constants/sidebarItems';
import { useAuth } from '../hooks/useAuth';
import FormField from '../components/ui/FormField';
import TextareaField from '../components/ui/TextareaField';
import Button from '../components/ui/Button';
import SkillTag from '../components/ui/SkillTag';
import PresentButton from '../components/ui/PresentButton';
import PageHeader from '../components/ui/PageHeader';
import Section from '../components/ui/Section';
import Input from '../components/ui/Input';
import { apiClient } from '../utils/apiClient';


const CVMaster = () => {
    const { user, loading, username } = useAuth();
    const [isSaving, setIsSaving] = useState(false);


    const [title, setTitle] = useState('Position1');
    
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    
    const [description, setDescription] = useState('я молодець візьміть на роботу');
    const [linkedIn, setLinkedIn] = useState('my linkedin');
    const [github, setGithub] = useState('my github');
    // const [experiences, setExperiences] = useState([
    //     { id: '1', position: 'soft dev', company: 'КУК', startDate: '2024', endDate: '', isPresent: true },
    // ]);
    // const [educations, setEducations] = useState([
    //     { id: '1', universityName: 'КУК', faculty: 'КУК', degree: 'Master', startDate: '2024', endDate: '', isPresent: true },
    //     { id: '2', universityName: 'КУК', faculty: 'КУК', degree: 'Master', startDate: '2024', endDate: '', isPresent: true },
    // ]);
    // const [skills, setSkills] = useState<string[]>([
    //     'прикол++',
    //     'bdfnbidf',
    //     // ... (інші навички)
    // ]);
    // const [newSkill, setNewSkill] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.first_name || '');
            setSurname(user.last_name || '');
            setEmail(user.email || '');

        }
    }, [user]); 


    const sidebarCVs: SidebarCV[] = [
        { id: '1', title: 'My CV' },

    ];

    const handleSave = async () => {
        setIsSaving(true);
        try {
            const cvData = {
                title,
                name,
                surname,
                email,
                description,
                linkedIn,
                github,
                // experiences,
                // educations,
                // skills,
            };
            
            console.log('Відправляємо CV на бекенд:', cvData);
            
            const response = await apiClient.post('/api/cv', cvData); 
            
            console.log('CV успішно збережено!', response.data);
            
        } catch (error) {
            console.error('Помилка при збереженні CV:', error);
        } finally {
            setIsSaving(false);
        }
    };

    
    function handleExportPDF() { console.log('Exporting PDF'); }
    function handleExportHTML() { console.log('Exporting HTML'); }
    function handleCancel() { console.log('Cancel'); }
    function handleNewCV() { console.log('New CV'); }
    function handleAIGenerator() { console.log('AI Generator'); }
    function handleCVSelect(id: string) { console.log('Select CV', id); }

    const sidebarActions: SidebarAction[] = [
        { label: 'Save', onClick: handleSave, variant: 'primary' },
        { label: 'Export to PDF', onClick: handleExportPDF, variant: 'outline' },
        { label: 'Export to HTML', onClick: handleExportHTML, variant: 'outline' },
        { label: 'Cancel', onClick: handleCancel, variant: 'gray' },
    ];

    // function addExperience() {
    //     setExperiences([...experiences, {
    //         id: Date.now().toString(),
    //         position: '',
    //         company: '',
    //         startDate: '',
    //         endDate: '',
    //         isPresent: false,
    //     }]);
    // }

//     function removeExperience(id: string) {
//         setExperiences(experiences.filter(exp => exp.id !== id));
//     }

//     function updateExperience(id: string, field: keyof Experience, value: any) {
//         setExperiences(experiences.map(exp =>
//             exp.id === id ? { ...exp, [field]: value } : exp
//         ));
//     }

//     function addEducation() {
//         setEducations([...educations, {
//             id: Date.now().toString(),
//             universityName: '',
//             faculty: '',
//             degree: '',
//             startDate: '',
// endDate: '',
//             isPresent: false,
//         }]);
//     }

//     function removeEducation(id: string) {
//         setEducations(educations.filter(edu => edu.id !== id));
//     }

//     function updateEducation(id: string, field: keyof Education, value: any) {
//         setEducations(educations.map(edu =>
//             edu.id === id ? { ...edu, [field]: value } : edu
//         ));
//     }

// function addSkill() {
//         if (newSkill.trim()) {
//             setSkills([...skills, newSkill.trim()]);
//             setNewSkill('');
//         }
//     }

    // function removeSkill(index: number) {
    //     setSkills(skills.filter((_, i) => i !== index));
    // }

    if (loading) {
        return (
            <DashboardLayout
                username={username}
                sidebarItems={DEFAULT_SIDEBAR_ITEMS}
                sidebarActions={sidebarActions}
                sidebarCVs={sidebarCVs}
                onCVSelect={handleCVSelect}
                onNewCV={handleNewCV}
                onAIGenerator={handleAIGenerator}
            >
                <div className="text-white font-pixel">Loading CV Master...</div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout
            username={username}
            sidebarItems={DEFAULT_SIDEBAR_ITEMS}
            sidebarActions={sidebarActions}
            sidebarCVs={sidebarCVs}
            onCVSelect={handleCVSelect}
            onNewCV={handleNewCV}
            onAIGenerator={handleAIGenerator}
        >
            <div className="max-w-4xl">
                <PageHeader title="CV Master" className="mb-8" />

                <div className="space-y-8">
                    {/* Title Section */}
                    <Section title="Title">
                        <FormField
                            name="title"
                            label="Title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Position1"
                            containerClassName="mb-0"
                        />
                    </Section>

                    {/* General Section */}
                    <Section title="General">
                        <div className="space-y-4">
                            <FormField
                                name="name"
                                label="Name"
                                type="text"
                                value={name} // <-- Тепер тут будуть дані з useAuth
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Test"
                            />
                            <FormField
                                name="surname"
                                label="Surname"
                                type="text"
                                value={surname} // <-- Тепер тут будуть дані з useAuth
                                onChange={(e) => setSurname(e.target.value)}
                                placeholder="Test"
                            />
                            <FormField
                                name="email"
                                label="Email"
                                type="email"
                                value={email} // <-- Тепер тут будуть дані з useAuth
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="example@gmail.com"
                            />
                            <TextareaField
                                name="description"
                                label="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={4}
                                containerClassName="mb-0"
                            />
                        </div>
                    </Section>

                    {/* Accounts Section */}
                    <Section title="Accounts">
                        <div className="space-y-4">
                            <FormField
                                name="linkedIn"
                                label="LinkedIn"
                                type="url"
                                value={linkedIn}
                                onChange={(e) => setLinkedIn(e.target.value)}
                                placeholder="httpfvfkfbf"
                            />
                            <FormField
                                name="github"
                                label="GitHub"
                                type="url"
                                value={github}
                                onChange={(e) => setGithub(e.target.value)}
                                placeholder="httpfvfkfbf"
                                containerClassName="mb-0"
                            />
                        </div>
                    </Section>

                    {/* Experience Section */}
                    {/* <Section title="Experience">
                        <div className="space-y-6">
                            {experiences.map((exp) => (
                                <div key={exp.id} className="border border-white rounded p-4 space-y-4 shadow-emerald">
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1 space-y-4">
                                            <FormField
                                                name={`exp-position-${exp.id}`}
                                                label="Position"
                                                type="text"
                                                value={exp.position}
                                                onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                                                placeholder="soft dev"
                                            />
                                            <FormField
                                                name={`exp-company-${exp.id}`}
                                                label="Company"
                                                type="text"
                                                value={exp.company}
                                                onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                                                placeholder="КУК"
                                            />
                                            <div className="flex gap-4 items-end">
                                                <FormField
                                                    name={`exp-start-${exp.id}`}
                                                    label="Start date"
                                                    type="text"
                                                    value={exp.startDate}
                                                    onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                                                    placeholder="2024"
                                                    containerClassName="flex-1 mb-0"
                                                />
                                                <div>
                                                    <label className="block text-white mb-2 font-pixel">End date</label>
                                                    <PresentButton
                                                        isPresent={exp.isPresent}
                                                        onChange={(isPresent) => {
                                                            updateExperience(exp.id, 'isPresent', isPresent);
                                                            if (isPresent) {
                                                                updateExperience(exp.id, 'endDate', '');
                                                            }
                                                        }}
                                                    />
                                                </div> */}
                                                {/* {!exp.isPresent && (
                                                    <FormField
                                                        name={`exp-end-${exp.id}`}
                                                        label=""
                                                        type="text"
                                                        value={exp.endDate}
                                                        onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                                                        placeholder="2025"
                                                        containerClassName="flex-1 mb-0"
                                                    />
                                                )} */}
                                            {/* </div>
                                        </div> */}
                                        {/* {experiences.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeExperience(exp.id)}
                                                className="text-red-500 hover:text-red-700 ml-4"
                                            >
                                                ×
                                            </button>
                                        )} */}
                                    {/* </div>
                                </div>
                            ))}
                            <Button variant="outline" onClick={addExperience}>
                                + Add experience
                            </Button>
                        </div>
                    </Section> */}

                    {/* Education Sections
                    {educations.map((edu, eduIndex) => (
                        <div key={edu.id}>
                            <h2 className="text-white text-2xl font-heading mb-4">Education</h2>
                            <div className="border border-white rounded p-4 space-y-4 shadow-emerald">
                                <div className="flex justify-between items-start">
                                    <div className="flex-1 space-y-4">
                                        <FormField
                                            name={`edu-university-${edu.id}`}
                                            label="University name"
                                            type="text"
                                            value={edu.universityName}
                                            onChange={(e) => updateEducation(edu.id, 'universityName', e.target.value)}
                                            placeholder="КУК"
                                        />
                                        <FormField
                                            name={`edu-faculty-${edu.id}`}
                                            label="Faculty"
                                            type="text"
                                            value={edu.faculty}
                                            onChange={(e) => updateEducation(edu.id, 'faculty', e.target.value)}
                                            placeholder="КУК"
                                        />
                                        <FormField
                                            name={`edu-degree-${edu.id}`}
                                            label="Degree"
                                            type="text"
                                            value={edu.degree}
                                            onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                                            placeholder="Master"
                                        />
                                        <div className="flex gap-4 items-end">
                                            <FormField
                                                name={`edu-start-${edu.id}`}
                                                label="Start date"
                                                type="text"
                                                value={edu.startDate}
                                                onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                                                placeholder="2024"
                                                containerClassName="flex-1 mb-0"
                                            />
                                            <div>
                                                <label className="block text-white mb-2 font-pixel">End date</label>
                                                <PresentButton
                                                    isPresent={edu.isPresent}
                                                    onChange={(isPresent) => {
                                                        updateEducation(edu.id, 'isPresent', isPresent);
                                                        if (isPresent) {
                                                            updateEducation(edu.id, 'endDate', '');
                                                        }
                                                    }}
                                                />
                                            </div>
                                            {!edu.isPresent && (
                                                <FormField
                                                    name={`edu-end-${edu.id}`}
                                                    label=""
                                                    type="text"
                                                    value={edu.endDate}
                                                    onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                                                    placeholder="2025"
                                                    containerClassName="flex-1 mb-0"
                                                />
                                            )}
                                        </div>
                                    </div>
                                    {educations.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeEducation(edu.id)}
                                            className="text-red-500 hover:text-red-700 ml-4"
                                        >
                                            ×
                                        </button>
                                    )}
                                </div>
                            </div>
                            {eduIndex === educations.length - 1 && (
                                <Button variant="outline" onClick={addEducation} className="mt-4">
                                    + Add education
                                </Button>
                            )}
                        </div>
                    ))} */}

                    {/* Skills Section */}
                    {/* <div>
                        <h2 className="text-white text-2xl font-heading mb-4">Skills</h2>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {skills.map((skill, index) => (
                                <SkillTag
                                    key={index}
                                    skill={skill}
                                    onRemove={() => removeSkill(index)}
                                />
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <Input
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        addSkill();
                                    }
                                }}
                                placeholder="Enter skill"
                                className="flex-1"
                            />
                            <Button variant="outline" onClick={addSkill}>
                                + Add skill
                            </Button>
                        </div>
                    </div> */}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default CVMaster;