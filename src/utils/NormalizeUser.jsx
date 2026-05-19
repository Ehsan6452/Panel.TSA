// /utils/NormalizeUser.js

export function NormalizeUser(raw) {
    return {
        id: raw.id,

        name: raw.personalInfo?.name || '',
        avatarUrl: raw.personalInfo?.avatarUrl || null,
        email: raw.contactInfo?.email || '',
        phone: raw.contactInfo?.phone || '',

        // traveler تبدیل به user می‌شود
        userType: raw.systemData?.userType === 'traveler'
            ? 'user'
            : raw.systemData?.userType || '',

        // این فیلد مهم حذف شده بود! 🟥
        subType: raw.systemData?.subType || null,

        status: raw.systemData?.status || 'active',
        createdAt: raw.systemData?.createdAt || '',
        lastActivity: raw.systemData?.lastActivity || ''
    };
}
