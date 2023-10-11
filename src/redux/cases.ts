import { InitialStateContacts, PendingAction, RejectedAction } from '@types';
import { AnyAction } from 'redux';

export const CasePending = (state: InitialStateContacts) => {
  state.isLoading = true;
};

export const isPendingAction = (action: AnyAction): action is PendingAction => {
  return action.type.endsWith('/pending');
};
export const isRejectedAction = (action: AnyAction): action is RejectedAction => {
  return action.type.endsWith('/rejected');
};
