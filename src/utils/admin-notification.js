
export function AddSuccessNotification(Notification){
    Notification.event('block');
    const timer = setTimeout(() => {
        Notification.event('none');
    }, 3000);
    return () => clearTimeout(timer);
}
export function ClearNotification(value,event){
    const timer = setTimeout(() => {
        event(value);
    }, 3000);
    return () => clearTimeout(timer);
}
export function ClearNotificationWithWarring(value,event,warring_event){
    const timer = setTimeout(() => {
        event(value);
        warring_event(value);
    }, 3000);
    return () => clearTimeout(timer);
}

export function ClearWarning(value,event){
    const timer = setTimeout(() => {
        event(value);
    }, 3000);
    return () => clearTimeout(timer);
}