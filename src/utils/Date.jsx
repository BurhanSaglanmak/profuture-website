export const normalizeDate = (date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());
export const today = normalizeDate(new Date());
export const isNew = (dateStr) => {
    const date = normalizeDate(new Date(dateStr));
    const diffDays = Math.abs(date - today) / (1000 * 60 * 60 * 24);
    return diffDays <= 30;
};