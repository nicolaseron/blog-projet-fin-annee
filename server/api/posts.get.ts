export default defineEventHandler(async () => {
    try {
        const result = await client.query(`
            SELECT posts.id,
                   posts.title,
                   posts.content,
                   posts.created_date,
                   images.img_link,
                   intermediary_tags_posts.id_tags
            FROM posts
                     JOIN images on images.id_post = posts.id
                     JOIN intermediary_tags_posts ON intermediary_tags_posts.id_posts = posts.id
            ORDER BY posts.id desc
        `);
        return result.rows;
    } catch (err) {
        console.log("Erreur lors de l'éxécution de la requête post.get" , err);
        throw new Error('Error executing query');
    }
});
