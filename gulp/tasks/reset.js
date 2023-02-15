import { deleteAsync } from 'del'
export const reset = async () => {
    const del = await deleteAsync(app.path.clean)
    return del
}