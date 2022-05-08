
export const errorMapper = (error) => ({
    code: error.response?.data?.status ?? error.response?.status ?? 500,
    msg: error.response?.data?.message ?? error.message
});