presentAlert = async () => {
    const alertController = document.querySelector('ion-alert-controller');

    if (!alertController) {
        return;
    }

    await alertController.componentOnReady();

    const alert = await alertController.create({
        header: 'Hey!',
        message: 'Cool beans',
        buttons: ['OK']
    });

    return await alert.present();
};
