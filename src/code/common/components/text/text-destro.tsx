export const destro = {
  p_md_n_p: 'text-md font-normal text-primary',
  p_md_m_p: 'text-md font-medium text-primary',
  p_md_b_p: 'text-md font-bold text-primary',
  //
  p_bo_n_p: 'text-body font-normal text-primary',
  p_bo_m_p: 'text-body font-medium text-primary',
  p_bo_b_p: 'text-body font-bold text-primary',
  //
  p_ba_n_p: 'text-base font-normal text-primary',
  p_ba_m_p: 'text-base font-medium text-primary',
  p_ba_b_p: 'text-base font-bold text-primary',
  //
  h_lg_n_p: 'text-lg font-normal text-primary',
  h_lg_m_p: 'text-lg font-medium text-primary',
  h_lg_b_p: 'text-lg font-bold text-primary',
  //
  h_xl_n_p: 'text-xl font-normal text-primary',
  h_xl_m_p: 'text-xl font-medium text-primary',
  h_xl_b_p: 'text-xl font-bold text-primary',
  //
  h_2xl_n_p: 'text-2xl font-normal text-primary',
  h_2xl_m_p: 'text-2xl font-medium text-primary',
  h_2xl_b_p: 'text-2xl font-bold text-primary',
} as const;

// export type destrosKeys = 'p_md_n_p' | 'p_bo_n_p' | 'p_bo_m_p' | undefined;
export type destrosKeys = keyof typeof destro;
