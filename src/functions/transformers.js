export const transformQuestions = (data) => {
  return data.items.map(
    ({
      is_answered: isAnswered,
      question_id: questionId,
      view_count: viewCount,
      score,
      title,
      link: postLink,
      owner: {
        display_name: displayName,
        profile_image: profileImage,
        user_id: userId,
        reputation,
        link,
      },
    }) => ({
      isAnswered,
      questionId,
      viewCount,
      score,
      title,
      postLink,
      owner: {
        displayName,
        profileImage,
        userId,
        reputation,
        link,
      },
    })
  )
}
